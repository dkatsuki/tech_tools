class CreateToolPages < ActiveRecord::Migration[7.0]
  def change
    create_table :tool_pages do |t|
      t.string :name, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
