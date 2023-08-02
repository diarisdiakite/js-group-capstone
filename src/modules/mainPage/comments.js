// eslint-disable-next-line import/prefer-default-export
export const comments = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
  });
};
