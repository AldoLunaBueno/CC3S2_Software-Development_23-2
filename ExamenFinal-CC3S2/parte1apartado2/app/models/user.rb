class User < ApplicationRecord
    validates :username, :presence => true
    validate :username_format

    def username_format
        if is_letter(username[0])
            errors.add(:base, "El primer caracter del nombre de usuario no es una letra.")
        end

        if username.length > 10
            errors.add(:base, "El nombre de usuario tiene más de 10 caracteres")
        end
    end
    private
    def is_letter(string)
        !string.match(/[a-zA-Z]/).nil?          
    end
end
