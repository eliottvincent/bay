# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "bay_jekyll_theme"
  spec.version       = "1"
  spec.authors       = ["Eliott Vincent"]
  spec.email         = ["hello@eliottvincent.com"]

  spec.summary       = %q{A simple and minimal Jekyll theme..}
  spec.homepage      = "https://github.com/eliottvincent/bay"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_development_dependency "jekyll", "~> 4.0"
  spec.add_development_dependency "bundler", "~> 2.0"
end
