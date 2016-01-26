  Rails.application.routes.draw do




  # devise_for :teachers
  scope "/students" do
    resources :grades
    resources :achievements
  end

  scope "/teachers" do
    get "/grades/:id" =>"teachers#getGrade"
    get "/achievements/:id" =>"teachers#getAchievement"
  end

  # devise_for :students
  get "/students" => "students#index"
  get "/teachers" => "teachers#index"
  get "/students/edit-detail" => "students#edit_detail"
  post"/students/edit-detail" => "students#update"
  root "home#index"
  # resources :students
  #  devise_scope :students do
  #       get "students/register" => "registration#register"
  #  end
    # devise_scope :students do
  #   get "/signup" => "students/registrations#new", :as => :new_user_registration
  # end
  # resources :students
    devise_for :students, :controllers => { :sessions => "sessions" ,:registrations =>"registrations"}
    devise_for :teachers, :controllers => { :sessions => "sessions" ,:registrations =>"registrations"}

  #  devise_for :students, :controllers: { sessions: "students/essions", registrations: "students/registrations" }, path_names: { sign_in: 'login', password: 'forgot', confirmation: 'confirm', unlock: 'unblock', sign_up: 'register', sign_out: 'signout'}
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get 'teachers/index'
  #
  # get 'teachers/show'
  #
  # get 'teachers/edit'
  #



  # devise_for :faculty
  #  devise_for :teachers, controllers: {registrations: 'teacher/registrations' }
  # devise_for :teachers, view: {sign_in: 'teacher/si' }
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
