Rails.application.routes.draw do
  get 'tech_tools/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'application#health_check'
  resources :tool_pages
end
