return {
  "catppuccin",
  priority = 1000,
  opts = {
    flavour = "macchiato",
    transparent_background = true,
    dim_inactive = {
      enabled = false,
      shade = "dark",
      percentage = 0.15,
    },
    integrations = {
      bufferline = true,
      leap = true,
      mason = true,
      mini = true,
      neotree = true,
      navic = {
        enabled = true,
        custom_bg = "NONE",
      },
      notify = true,
      treesitter = true,
      noice = true,
      lsp_trouble = true,
      illuminate = {
        enabled = true,
        lsp = true,
      },
      which_key = true,
    },
  },
}
