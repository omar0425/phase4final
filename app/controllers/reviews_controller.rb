class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  # run authorize before everything
  before_action :authorize 
  # Do not run authorize on index create and show, therefore running authorize on update and delete
  skip_before_action :authorize, only: [:index, :create, :show] 

  # run authorize_create before create
  before_action :authorize_create, only: [:create]
  

  # authorize

  
  def index 
    reviews = Review.all
    render json: reviews
  end

  def show
    
    review = find_review
    render json: review
  end

  def create 
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def update
    review = find_review
    review.update(review_params)
    render json: review
  end

  def destroy
    review = find_review
    review.destroy
    render json: review
  end
  


  private
  def render_not_found_response
    render json: { error: "Movie not found"}, status: :not_found
  end  

  def find_review
    Review.find(params[:id])
  end
  
  def review_params
    params.permit(
      :comment,
      :title,
      :rating,
      :user_id,
      :movie_id)
    end
    
    def render_not_found_response
      render json: { error: ["Review not found"]}, status: :not_found
    end
  
  def render_unprocessable_entity_response invalid
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def authorize 
    return render json: { error: ["Not authorized"] }, status: :unauthorized unless session[:user_id] == find_review.user_id
  end
  def authorize_create
    return render json:{error: ["not authorized"]}, status: :unauthorized unless session.include? :user_id
  end


end