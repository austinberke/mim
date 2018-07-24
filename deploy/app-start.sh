source /home/ec2-user/.bash_profile
export NODE_ENV=production
# Forward HTTP traffic to Node
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 1337
cd /home/ec2-user/www/app
sudo service mongod start
npm start
