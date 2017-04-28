Rails.application.routes.draw do
 root to: 'static_pages#root'

 namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :show]
   resource :session, only: [:create, :destroy]
   resources :follows, only: [:create, :destroy]
   get '/songs/stream/:id', to: 'songs#stream'
   get '/songs/discover', to: 'songs#discover'
   resources :songs, only: [:index, :create, :show]
   resources :comments, only: [:create, :destroy]
 end
end
