set hlsearch

set tabstop=4
set sw=4
set softtabstop=4
"set expandtab
autocmd filetype python set expandtab
autocmd filetype bash set expandtab
autocmd filetype sh set expandtab

filetype on            " enables filetype detection
filetype plugin on     " enables filetype specific plugins

set t_Co=256

syntax on
filetype plugin indent on


" The direction of n and N depends on whether / or ? was used for searching
" forward or backward respectively. This can be pretty confusing.
" 
" If you want n to always search forward and N backward, use this:
nnoremap <expr> n  'Nn'[v:searchforward]
nnoremap <expr> N  'nN'[v:searchforward]


"By default <c-l> clears and redraws the screen (like :redraw!). The following mapping does the same, plus de-highlighting the matches found via /, ? etc., plus fixing syntax highlighting (sometimes Vim loses highlighting due to complex highlighting rules), plus force updating the syntax highlighting in diff mode:

nnoremap <C-l> :nohlsearch<cr>:diffupdate<cr>:syntax sync fromstart<cr><c-l>

set viminfo='50  " yank an unlimited number of lines
set nu rnu  " relative line numbers

