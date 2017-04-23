Rails.application.routes.draw do
 root to: 'static_pages#root'

 namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :show]
   resource :session, only: [:create, :destroy]
   resources :follows, only: [:create, :destroy, :show]
   get '/songs/discover', to: 'songs#discover'
   resources :songs, only: [:index, :create, :show]
 end
end
