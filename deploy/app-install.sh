source /home/ec2-user/.bash_profile
# Build Frontend
cd /home/ec2-user/www/frontend
npm install
npm run build
cp -r build/ ../app/public/
# Install Application
cd /home/ec2-user/www/app
npm install
sudo chown -R ec2-user /home/ec2-user/
