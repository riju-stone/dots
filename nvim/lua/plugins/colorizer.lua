return {
  "NvChad/nvim-colorizer.lua",
  event = { "BufReadPre", "BufNewFile" },
  -- config = true,
  opts = {
    user_default_options = {
      mode = "virtualtext",
    },
  },
}
