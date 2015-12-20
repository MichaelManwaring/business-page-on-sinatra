#set up gems
require 'sinatra'
require 'sendgrid-ruby'
client = SendGrid::Client.new(api_user: ENV['MichaelManwaring'], api_key: ENV['SENDGRID_APIKEY'])

get '/' do
	@title = "Wine Life  .  VinoVitae"
	erb :home
end

get '/enjoy' do
	@title = "Frunesco  .  VinoVitae"
	erb :enjoy
end

get '/share' do
	@title = "Pars  .  VinoVitae"
	erb :share
end

get '/how' do
	@title = "Operibus  .  VinoVitae"
	erb :how
end

get '/cellar' do
	@title = "Cellarium  .  VinoVitae"
	erb :cellar
end

get '/contact' do
	@title = "Loqui  .  VinoVitae"
	erb :contact
end

get "/signup" do
	@gift="off"
	erb :signup
end

post "/signup" do
	puts "my params are" + params.inspect
	@gift="off"
	puts @gift
	@email = params["email"]
	# password needs a match-check
	@password = params["password"]
	@name = params['name']
	@address1 = params['address1']
	@address2 = params['address2']
	@city = params['city']
	# state needs a legality check
	@state = params['state']
	@zip = params['zip']
	# Birthdate needs a 21-year check
	@birthdate = params['birthdate']
	#functionality of g-variables should toggle with this button
	@gname = params['gname']
	@gaddress1 = params['gaddress1']
	@gaddress2 = params['gaddress2']
	@gcity = params['gcity']
	# state needs a legality check
	@gstate = params['gstate']
	@gzip = params['gzip']
	# Birthdate needs a 21-year check
	@gbirthdate = params['gbirthdate']
	mail = SendGrid::Mail.new do |m|
	 m.to = @email
	 m.from = 'michael.c.manwaring@gmail.com'
	 if @state[0]=="x" && @gstate[0]=="x" 
	 	@state=@state[1,2]
	 	@gstate=@gstate[1,2]
	 	m.subject = 'Wine of the Month'
	 	m.text = 'Dear '+@name+',
	 	We at Wine of the Month are sad to inform you that the liquor laws in your state do not permit alchohol shipments of this kind. If you would still like to try our selection, you might consider getting this subsription as a gift for a friend in a different state.
	 	Thanks,
	 	Wine of the Month Team'	
	 elsif @gift == "on"
	 	@state=@state[1,2]
	 	@gstate=@gstate[1,2]
	 	m.subject = 'Welcome to Wine of the Month!'
	 	m.text = 'Dear '+@name+',
	 	Thanks for joining Wine of the Month, your [insert subscription type here] delivery should arrive soon!

	 	Please verify this account information: 
	 	Billing:
	 	'+@name+'
	 	'+@address1+'
	 	'+@address2+'
	 	'+@city+', '+@state+' '+@zip+'
	 	'+'
	 	Shipping:
	 	'+@gname+'
	 	'+@gaddress1+'
	 	'+@gaddress2+'
	 	'+@gcity+', '+@gstate+' '+@gzip+'
	 	'+'
	 	Happy Sipping,
	 	Wine of the Month Team'
	 else	 	
	 	@state=@state[1,2]
	 	m.subject = 'Welcome to Wine of the Month!'
	 	m.text = 'Dear '+@name+',
	 	Thanks for joining Wine of the Month, your [insert subscription type here] delivery should arrive soon!

	 	Please verify this account information: 
	 	'+@name+'
	 	'+@address1+'
	 	'+@address2+'
	 	'+@city+', '+@state+' '+@zip+'
	 	'+'
	 	Happy Sipping,
	 	Wine of the Month Team'
	 end
	end
	res = client.send(mail)
	puts res.code
	puts res.body
	puts @gift
	erb :signup
end

# mail = SendGrid::Mail.new do |m|
#  m.to = 'michael.c.manwaring@gmail.com'
#  m.from = 'michael.c.manwaring@gmail.com'
#  m.subject = 'test!'
#  m.text = 'Check this out, bro!'
# end
# res = client.send(mail)
# puts res.code
# puts res.body