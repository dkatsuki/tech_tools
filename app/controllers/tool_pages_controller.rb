class ToolPagesController < ApplicationController
	def index
	end

	def show
		@tool_page = ToolPage.find(params[:id])
	end
end
