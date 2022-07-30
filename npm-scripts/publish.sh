if [[ $npm_config_nobuild ]]
then
    echo 'publishing without build'
    echo 'no build 2'
else 
   echo 'building before publishing' 
   npm run build
fi


echo 'now zipping build folder & copying to server'
zip -r build.zip public/ 
scp ./build.zip root@huelite.in:/var/www


echo 'now running ssh commands'
npm run deploySshCommands