abort "DB already seeded. Aborting!" if User.count > 0

nick = User.create(provider: "twitter",
  uid: "181759222",
  name: "Nick Aversano",
  nickname: "nickaversano",
  image: "http://pbs.twimg.com/profile_images/779528159498600448/nWvt7hML_normal.jpg"
)

Goto.skip_callback(:save, :before, :fetch_twitter_data_if_needed)

nick.gotos.create(name: "Jeff Hilnbrand",
  nickname: "jhilmd",
  skill: "hello",
  image: "http://pbs.twimg.com/profile_images/716751511229870080/6hj0gDAM_normal.jpg"
)

nick.gotos.create(name: "Noga Raviv",
  nickname: "nogaraviv",
  skill: "googly eyes",
  image: "http://pbs.twimg.com/profile_images/785962035754381313/9vY2dIAm_normal.jpg"
)

nick.gotos.create(name: "Robert Cobb",
  nickname: "robcobbable",
  skill: "stuff",
  image: "http://pbs.twimg.com/profile_images/645391345951993856/LmQ5la_P_normal.jpg",
)

nick.gotos.create(name: "Kunal Sharma",
  nickname: "kunals1994",
  skill: "kunals1994",
  image: "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
)

nick.gotos.create(name: "Richard",
  nickname: "relhiggins",
  skill: "getting rich quick",
  image: "http://pbs.twimg.com/profile_images/667596230701285376/PlL3ylRE_normal.jpg",
)

nick.save!

Goto.set_callback(:save, :before, :fetch_twitter_data_if_needed)

puts "DB seeded successfully!"
