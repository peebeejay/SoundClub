class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save!
      render "api/follows/show"
    else
      render json: @follow.errors, status: 422
    end
  end

  def destroy
    @follow = Follow.find(
      followee_id: follow_params[:followee_id],
      follower_id: follow_params[:follower_id]
    )
    if @follow
      render "api/follows/show"
    else
      render json: {}, status: 404
    end
  end

  def show
    @follow = Follow.find(params[:id])
    if @follow
      render "api/follows/show"
    else
      render json: nil, status: 404
    end
  end

  private def follow_params
    params.require(:follow).require(:followee_id, :follower_id)
  end
end
