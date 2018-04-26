class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: { base: ["Invalid Credentials"] }, status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render "api/users/show"
    else
      render json: nil
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: {}, status: 404
    end
  end

  private def session_params
    params.require(:user).permit(:username, :password)
  end
end
