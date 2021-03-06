class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :collections, dependent: :destroy
  has_many :scores, through: :collections
  has_many :collaborations
  has_many :collab_scores, through: :collaborations, source: :score
  has_many :annotations, dependent: :destroy

  validates :username, presence: true
  has_one_attached :picture
end
