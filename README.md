# Salesloft demo app

## Scripts

To start your aplication locally
```
npm run dev
```

To run test
```
npm run test
```
or (to calculate coverage)
```
npm run test:coverage
```

To run linter
```
npm run lint
```
To try to fix simple linter offenses
```
npm run lint:fix
```

## Configuration

### Env variables
| Variable    | Purpose                             | Default                   | Optional |
|-------------|-------------------------------------|---------------------------|----------|
| MODE        | Sets production or development mode | development               | Yes      |
| API_HOST    | Sets host to make api calls         | https://api.salesloft.com | No       |
| API_VERSION | Sets api version to use             | v2                        | No       |
| API_KEY     | API key to use with calls           |                           | No       |

## How to run
After configuring env variables

Local api server should be running to prevent cors errors during development
```
npm run server
```
```
npm run dev
```
