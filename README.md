# actions-gift-blob-to-pull-request
[![CI](https://github.com/alfredosalzillo/actions-gift-blob-to-pull-request/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/alfredosalzillo/actions-gift-blob-to-pull-request/actions/workflows/CI.yml)

This action gift a beatiful and unique blob to PR authors.

## Inputs

### `blob_width`

The width of the blob.

### `blob_height`

The height of the blob.

### `tag`

The tag of the comment that will be used to identify if for the PR the blob has already been gifted

## Envs

### `GITHUB_TOKEN`

The github token to use to comment the PR.

## Example usage

```yaml
- uses: alfredosalzillo/actions-gift-blob-to-pull-request@main
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    blob_width: 200
    blob_height: 200
    tag: blob-gifted
```
