Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  root 'home#index'
  resources :users do
    resources :gotos
  end
  get ':nickname' => 'users#show'
end
