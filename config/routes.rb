Rails.application.routes.draw do
  resources :movies, only: [:index,:create,:show]
  resources :users, only: [:index,:create]
  resources :reviews, only: [:index,:create,:show,:delete]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
