class CreateGotos < ActiveRecord::Migration[5.0]
  def change
    create_table :gotos do |t|
      t.belongs_to :user, index: true
      t.string :image
      t.string :name
      t.string :nickname
      t.string :skill
      t.timestamps
    end
  end
end
