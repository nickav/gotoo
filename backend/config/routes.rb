Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  root 'home#index'
  get 'users/:nickname' => 'users#show'
  resources :users do
    resources :gotos
  end
end
