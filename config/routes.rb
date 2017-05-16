Rails.application.routes.draw do
 root to: 'static_pages#root'

 namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :show]
   resource :session, only: [:create, :destroy]
   resources :follows, only: [:create, :destroy]

   get '/songs/stream/:id', to: 'songs#stream'
   get '/songs/discover', to: 'songs#discover'
   get '/songs/user/:user_id', to: 'songs#user_songs'
   get '/songs/random', to: 'songs#random_song'
   resources :songs, only: [:index, :create, :show, :destroy] do
     delete '/likes', to: 'likes#destroy'
     resources :likes, only: [:create]
   end

   resources :comments, only: [:create, :destroy]
 end
end
