class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(
    user_id: current_user[:id],
    song_id: comment_params[:song_id],
    body: comment_params[:body]
    )

    if @comment.save!
      @song = Song.find(@comment.song_id)
      render 'api/songs/show'
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @song = Song.find(@comment.song_id)
      @comment.destroy!
      render 'api/songs/show'
    else
      render json: ["nil"], status: 422
    end
  end

  private def comment_params
    params.require(:comment).permit(:body, :song_id)
  end
end
