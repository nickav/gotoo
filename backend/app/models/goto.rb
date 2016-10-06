class Goto < ApplicationRecord
  belongs_to :user

  validates :craft, presence: true
  validates :nickname, length: { maximum: 15 }
end
