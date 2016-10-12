Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  scope '/api' do
    root 'home#index'
    resources :users do
      resources :gotos
    end
    get ':nickname' => 'users#show'
  end

  get '*path' => 'home#static_index'
end
