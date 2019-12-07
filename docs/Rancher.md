# Rancher guide

This guide lays out, in general terms, instructions on provisioning
[Rancher](https://rancher.com/), an orchestration system which allows
for testing multiple versions of the same project in isolation. We
assume Rancher and environments created by it are running on the same node.

Prerequisites: Linux machine with:
- Docker installed and running
- Root SSH access to it
- Public IP address (`<public_ip>`)

1. Start Rancher server itself. Non-standard ports `8080` and `443` have to be used.
`docker run -d --restart=unless-stopped -p 8080:80 -p 8443:443 -v /opt/rancher:/var/lib/rancher rancher/rancher:latest`
1. Go to Rancher web UI (https://<public_ip>:8443), served over HTTPS. You'll get
`NET::ERR_CERT_AUTHORITY_INVALID` because Rancher generates a self-signed certificate.
Proceed with web installation: set up admin password, click "Save URL"
1. Click "Add cluster" -> "From existing nodes (Custom)", set up "Cluster Name"
(`node` used in example), click "Next".
1. Tick all of "etcd", "Control Plane" and "Worker". 
Rancher UI would give you a command that resembles the following
(`token` and `ca-checksum` would be filled in by Rancher):
`docker run -d --privileged --restart=unless-stopped
--net=host -v /etc/kubernetes:/etc/kubernetes
-v /var/run:/var/run rancher/rancher-agent:v2.3.2
--server https://<public_ip>:8443
--token <token>
--ca-checksum <ca_checksum>
--etcd --controlplane --worker`
on the same machine Rancher is running on.
Provisioning the node will take a while.
1. Select `node` in top left menu (there will be "Global" and "node"), then click "Projects/Namespaces"
1. Click "Add project", name it "CI infrastructure" and click "Create"
1. Click "Namespaces" and add `infra` namespace

# Creating Docker Registry

1. Click "Apps" -> "Launch" and find `docker-registry`. Proceed with filling the details:
1. Select Namespace -> Use existing namespace -> `infra`
1. Fill in "Docker Registry Htpasswd Authentication" by
executing (locally): `docker run --entrypoint htpasswd registry:2 -Bbn "username" "password"`
1. Fill in "NodePort Http Port": "30861"
1. Click "Launch"

At this point, we need to modify config of host node to allow accessing our registry.
Paste the following into `/etc/docker/daemon.json`:
```
{
  "insecure-registries" : ["<public_ip>:30861"]
}
```
and reload the config:
```
systemctl daemon-reload
systemctl restart docker
```

You can verify registry is accessible by accessing http://<public_ip>:30861/v2
Internally (e.g. from Drone CI) registry will be referenced
by `docker-registry.infra.svc.cluster.local:5000` hostname.

# Setting up Drone CI

Obtain OAuth 2 client id and secret by creating "Github OAuth app" or "Bitbucket OAuth consumer"
in GitHub/Bitbucket dashboard, respectively. Redirect URI there
should be set there to "<public_ip>:30000/login"

1. Click "Apps" -> "Launch" and find `drone`. Proceed with filling the details:
1. Select Namespace -> Use existing namespace -> `infra`
1. Fill in "Drone host domain": "<public_ip>:30000" (make sure to include the port)
1. Fill in "Set Drone Admin User": your username in source control system
1. Fill in "Drone Integration Server": `github`/`bitbucket cloud`
1. Fill in OAuth 2 client id and client secret
1. Fill in, if needed, "Bitbucket Server Username": your username in source control system
1. Fill in "NodePort Http Port": 30000


# Creating PV (persistent volumes)

In order for apps to persist data (DB, redis, staticfiles), their config
will need to define PVC (persistent volume claim). In order to satisfy that
claim, PV (persistent volume) should be created. We'll be creating
filesystem-backed PVs. Keep in mind that they are stored inside *node*
and not the host that runs Rancher (although they are the same machine)

1. Select `node` in top left menu (there will be "Global" and "node"), then click "Storage"
1. Click "Add volume" and fill in the details:
1. Fill in "Name": "vol1"
1. Fill in "Volume Plugin": "Local Node Path"
1. Fill in "Capacity"
1. Fill in "Path on the Node": "/mnt/k8s/vol1"
1. Fill in "Path on the Node must be": "A directory, or create if it does not exist"
1. Click "Customize", tick all Access Modes
1. Click "Save"

By default, created PVs have reclaim Policy set to "Retain", which means
that volumes will retain data on removing the claim. For test purposes,
reclaim policy `Recycle` is more appropriate as it removes data on the volume
and makes in available for further claims. However, it cannot be configured via
Rancher UI, so we're resorting to command line.

1. Select `node` in top left menu (there will be "Global" and "node"), then click "Cluster"
1. Click "Launch kubectl"
1. For every volume you've created, execute:
`kubectl patch pv <pvName> -p '{"spec":{"persistentVolumeReclaimPolicy":"Recycle"}}'`.
You can get list of PVs by executing `kubectl get pv`
