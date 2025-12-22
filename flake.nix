{
  description = "API Contract development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            biome
            nodejs_24
            pnpm
          ];

          env = {
              BIOME_BINARY = "${pkgs.biome}/bin/biome";
          };

          shellHook = ''
            echo "================================================"
            # Install node modules if they don't exist or are out of date
            if [ ! -d node_modules ] || [ pnpm-lock.yaml -nt node_modules/.modules.yaml ]; then
              echo "Installing dependencies"
              pnpm install --frozen-lockfile
            fi

            echo "Environment loaded successfully"
            echo "================================================"
          '';
        };
      }
    );
}
