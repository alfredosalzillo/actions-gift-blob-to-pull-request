# actions-gift-blob-to-pull-request

This action gift a beatiful unique blob to PR authors.

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
- uses: alfredosalzillo/actions-gift-blob-to-pull-request
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    blob_width: 200
    blob_height: 200
    tag: blob-gifted
```
