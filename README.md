# Simple Sharex Server

Setting up a custom image server can seem like a daunting task. I struggled to find a simple, lightweight library for running a static file server. So I made one!

# Setup

## Step 0: Get a domain and a server with the storage you want.
If you are starting from scratch, you will first need a server and a domain. I personally use a digitalocean droplet, and it works just fine for my purposes. Although not required, knowledge of nginx or apache is quite useful for the initial setup.

### 1. Clone repo, install dependencies

```bash
git clone https://github.com/clxxiii/simple-sharex-server.git
```

### 2. Populate `.env` file.

Create a new file in the base directory called `.env`, and populate
it with the following variables:

```env
STRING_LENGTH=8 # How long the filename should be
SECRET="secret" # A unique string to prevent others from uploading to your server
HOSTNAME="http://localhost:3000" # Your domain name & port (if necessary)
PORT=3000 # The port the server will run on
```

### 3. Install `pm2` and run the server

```bash
npm install -g pm2
# Make sure you are in the project directory
pm2 start index.js --name imgserver
```

### 4a. Configure `flameshot` to upload to the server:

Use the provided [flameshot-script.sh](https://github.com/clxxiii/simple-sharex-server/blob/main/flameshot-script.sh), and fill out the provided `secret`, and `hostname` fields.

You can now run the shell script to upload to the server.

Additionally, you can add a keyboard shortcut to your WM, so you can run the script easily and quickly
![keybind](https://img.clxxiii.dev/BZZDvzkJ.png)

### 4b. Configure `sharex` to upload to the server:

This setup process is a lot easier. Right click on the sharex icon in your system tray, and go to `Custom Uploader Settings`.

![image](https://user-images.githubusercontent.com/46410314/213494640-5db55922-33d0-4ca9-a280-f27b3f1e642b.png)

Make a new custom uploader, and fill out the `Method`, `Request URL`, `Body`, and `File form name` fields (highlighted on screenshot)

![image](https://user-images.githubusercontent.com/46410314/213493813-9c4daadf-5d42-4abf-a432-4a61584e8054.png)

