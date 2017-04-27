class Api::FollowsController < ApplicationController
  def create
    # debugger
    @follow = Follow.new(follow_params)

    if @follow.save!
      @user = User.includes(:followees, :follows, songs: [:artist]).find(current_user.id)
      render "api/users/show"
    else
      render json: @follow.errors, status: 422
    end
  end

  def destroy
    # @follow = Follow.find(
    #   followee_id: follow_params[:followee_id],
    #   follower_id: follow_params[:follower_id]
    # )
    # if @follow
    #   render "api/users/show"
    # else
    #   render json: {}, status: 404
    # end

    @follow = Follow.find(params[:id])
    if @follow
      @user = current_user
      @follow.destroy!
      render 'api/users/show'
    else
      render json: ["nil"], status: 422
    end
  end

  private def follow_params
    params.require(:follow).permit(:followee_id, :follower_id)
  end
end
