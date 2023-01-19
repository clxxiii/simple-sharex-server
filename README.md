# Simple Sharex Server

Setting up a custom image server can seem like a daunting task. I struggled to find a simple, lightweight library for running a static file server. So I made one!

# Setup

### 1. Clone repo, install dependencies

```bash
git clone https://github.com/clxxiii/simple-sharex-server.git
```

### 2. Populate `.env` file.

Create a new file in the base directory called `.env`, and populate
it with the following variables:

```env
STRING_LENGTH=8 # How long the filename should be
SECRET="secret" # A unique string to prevent other
HOSTNAME="http://localhost:3000" # Your server's hostname
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

This setup process is a lot easier. I don't have access to sharex currently, but I will update this as soon as I can get the screenshot to get it working.
