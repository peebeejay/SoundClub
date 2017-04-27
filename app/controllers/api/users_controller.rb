class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.includes(:songs).find(params[:id])
    if @user
      @follows = @user.follows.pluck(:id)
      render 'api/users/show'
    else
      render json: @user.errors, status: 404
    end
  end

  private def user_params
    params.require(:user).permit(:username, :password, :location, :display_name, :img)
  end
end
