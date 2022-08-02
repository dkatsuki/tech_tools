# デプロイ関連
## asset pipelineのコンパイルについて
1. Precompileしたものを全て削除
	- bundle exec rake assets:clobber RAILS_ENV=production
2. precompileする
	- bundle exec rake assets:precompile RAILS_ENV=production

# 質問メモ
- jsの処理コストをどの様に考えれば良いのか？時間？計算量？