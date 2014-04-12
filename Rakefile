require 'rubygems'
require 'closure-compiler'

CLOSURE_OPTIMIZATIONS = "WHITESPACE_ONLY"
OUTPUT_FILE = 'js/build/tracula.js'

task :default => [:compile]

desc "Compile the js mentioned in the menifest using closure"
task :compile do
  files = process_manifest
  # puts files
  write_compiled_js Closure::Compiler.new(:compilation_level => CLOSURE_OPTIMIZATIONS).compile_files(files)
end

def get_all_files(dir, ext)
  Dir["#{dir}/**/*.#{ext}"]
end

def write_compiled_js(js)
  File.open(OUTPUT_FILE, "w") do |f|
    f.puts js
  end
end

def process_manifest
  files = []
  File.open("Manifest.txt", "r") do |f|
    f.each_line do |line|
      line = line.strip
      if line.include? "*"
        files << Dir["#{line}"]
      else
        files << line
      end
    end
  end

  files = files.flatten
  #remove dups
  files.uniq
end
