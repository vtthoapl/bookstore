<script>

</script>
<div id="middle-navbar" class="navbar">
    <div class="flex-1">
      <a class="btn btn-ghost text-2xl">Book-App</a>
    </div>
    <div class="flex-none gap-4">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost"><p>Log in</p></div>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span class="badge badge-sm indicator-item">0</span>
            </div>
          </div>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info text-base-content">Your shopping card is empty.</span>
              <div class="card-actions">
                <button class="btn btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

  <style>
    #middle-navbar {
    position: relative;
    width: 100%;
    -webkit-transition: width .5s;
    -o-transition: width .5s;
    transition: width .5s;
    min-height: 80px;
    color: #fff;
    background-color: #2f2f2f;
    padding: 0 0.9375rem 0 0.625rem;
    }
  </style>