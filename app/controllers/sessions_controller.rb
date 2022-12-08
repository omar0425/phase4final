class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id]= user.id
      render json: user, status: 201
    end
    def destroy
      session.delete :user_id  
      head :no_content
    end

end
