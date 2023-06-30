
# Legend - Getting Started

## Run Legend locally

This step assumes that Docker has already been installed.

Copy/paste the command below in a terminal. Wait for a few minutes till   

```
bash <(curl -s https://raw.githubusercontent.com/finos/legend/demo/demo/demo1.sh)
```

Wait for a few minutes till the following banner is printed

```
All components have started successfully!
Supervisor: http://localhost:6901 (user: iam, password: legend)
Legend Engine: http://localhost:6300
Legend SDLC: http://localhost:6100
Legend Studio: http://localhost:9000/studio

To start using Legend, launch Studio at: http://localhost:9000/studio/
```

## Visit Legend in a browser 

Open http://localhost:9000/studio/

## Use Legend 

Follow the tutorials at https://legend.finos.org/docs/tutorials/studio-workspace

## Saving your model 

This version of Legend keeps the models in memory.

This means that they are not saved to disk and will be lost when the Legend Docker image is restarted. 

To save, switch to text mode (Hit F8 or the hacker icon in the bottom right corner of Studio) and copy/paste the model to a notepad/file etc.

The next version will support models being saved to disk.
