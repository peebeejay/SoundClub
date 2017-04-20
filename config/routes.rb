Rails.application.routes.draw do
 root to: 'static_pages#root'

 namespace :api, defaults: {format: :json} do
   resources :users, only: [:create]
   resource :session, only: [:create, :destroy]

   get '/songs/discover', to: 'songs#discover'
   resources :songs, only: [:index, :create, :show]
 end
end
