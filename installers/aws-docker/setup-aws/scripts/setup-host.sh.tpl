#!/bin/bash

# See /var/lib/cloud/instance/scripts/part-001 on ec2 host
# See /var/log/cloud-init-output.log on ec2 host

mkdir -p /home/ec2-user/cloudinit/

install_deps_script=/home/ec2-user/cloudinit/install-deps.sh

echo ${BASE64_INSTALL_DEPS} | base64 --decode > $install_deps_script
chmod +x $install_deps_script

$install_deps_script

