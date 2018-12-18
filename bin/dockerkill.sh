#!/bin/bash

if [ $# -ne 1 ]; then
    echo $0: usage: dockerkill containername
    exit 1
fi

echo "Choose option to remove"

containername="$1"

OLD_IFS="$IFS"
IFS="
"
select container_id in $(docker ps -a --filter "name=$containername" --format '{{.ID}} {{.Image}} {{.Names}}'); 
do 
  echo "Removing: $container_id"
  # stop any running containers
  echo $container_id | awk '{print $1}' | xargs docker stop ;

  # remove the container
  echo $container_id | awk '{print $1}' | xargs docker rm ;

  docker rmi $(docker images -q -f dangling=true)
done

IFS="$OLD_IFS"
