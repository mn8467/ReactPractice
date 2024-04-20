module: {
    rules: [
      { // .scss로 끝나는 확장자를 찾는데 s는 있을 수도 없을 수도 있다.
        test: /\.s?css$/,
        use: [
          // 아래 해석된 내용을 html파일에 삽입해줌
          'style-loader',
          // js파일에서 css파일을 해석할 수 있게 도와줌
          'css-loader',
          // sass에서 해석된 내용을 postcss-loader를 통해 공급업체 접두사를 붙여준다.
          'postcss-loader',
          // css-loader보다 sass-loader가 먼저 실행되어야 한다.
          'sass-loader'
        ]
      }
    ]
  }