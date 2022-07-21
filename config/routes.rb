Rails.application.routes.draw do
  root to: 'tool_pages#index'
  resources :tool_pages
end
