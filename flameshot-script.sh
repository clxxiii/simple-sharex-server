secret="secret"
url="http://localhost:3000/upload"
temp_file="/tmp/screenshot.png"

# Run flameshot --help for options
flameshot gui -r > $temp_file

# For some reason flameshot always seems to exit with 0 even when aborting the process
# so we had to find a way around that.
if [[ $(file --mime-type -b $temp_file) != "image/png" ]]; then
	rm $temp_file
  notify-send "Screenshot aborted" -a "Flameshot" && exit 1
fi

image_url=$(curl -X POST -F "file=@"$temp_file -F "secret="$secret -v "$url" 2>/dev/null)
echo -n $image_url | xclip -sel c
notify-send "Image URL copied to clipboard" "$image_url" -a "Flameshot" -i $temp_file
rm $temp_file
