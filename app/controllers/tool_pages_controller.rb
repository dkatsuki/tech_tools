class ToolPagesController < ApplicationController
	def index
		@tool_pages = ToolPage.all.limit(500)
	end

	def show
		@tool_page = ToolPage.find(params[:id])
	end
end
