Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  root 'home#index'
  get 'home' => 'home#index'
  get 'users' => 'users#index'
  get 'users/:nickname' => 'users#show'
end
