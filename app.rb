require 'sinatra'
require 'mandrill'

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