#!/bin/bash
sudo apt-get remove gnome-keyring
sudo apt-get install keychain

if [ -e ~/.ssh/id_ed25519 ]; then
    if [ ! -e ~/.ssh/id_ed25519.pub ]; then
        echo 'ERROR: you seem to have half of the ed25519 key, aborting'
        exit 1
    fi
    echo "set passphrase for id_ed25519"
    ssh-keygen -p -f ~/.ssh/id_ed25519
else
    ssh-keygen -t ed25519
fi

if ! fgrep -q 'keychain --eval' ~/.bashrc; then
    echo 'eval `keychain --eval`' >> ~/.bashrc
    ssh-add id_ed25519
fi

