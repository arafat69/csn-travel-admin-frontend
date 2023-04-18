<template>
  <div>
    <h3 class="header_title">All Booking</h3>

    <div class="booking_top_header bg-white">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <button class="nav-link active">
            Quoted
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link">
            Ticketed
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link">
            Cancelled
          </button>
        </li>
      </ul>
    </div>

    <div class="booking_header">
      <div class="search item">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="search" placeholder="Search..."></b-form-input>
        </b-input-group>
      </div>

      <div class="item">
        <select name="" class="form-control">
          <option value="Airlines">Airlines</option>
          <option value="Airlines2">Airlines2</option>
          <option value="Airlines3">Airlines</option>
        </select>
      </div>

      <div class="select">
        <select name="" class="form-control">
          <option value="">Booking Type</option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>

      <div class="status">
        <select name="" class="form-control">
          <option value="">Status</option>
          <option value="Economy">Issue</option>
        </select>
      </div>

      <div class="select-date item">
        <input id="basic" type="text" class="form-control"/>
      </div>
    </div>

    <div class="mt-3">
      <div class="table-responsive">
        <table class="table bookingTable">

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="economy">Economy</span>
              </div>
            </td>
            <td>
              <div class="logo">
                <img src="/images/airline1.png" />
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <div class="actionBtn">
                <div class="btn-group dropleft">
                  <button type="button" class="btn border text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                  </button>
                  <div class="dropdown-menu">
                    <button class="dropdown-item" data-toggle="modal" data-target="#cancelBooking" type="button"> Cancel</button>
                    <nuxt-link class="dropdown-item" type="button" to="/booking/ssr-entry"> SSR Entry</nuxt-link>
                  </div>
                </div>
              </div>
            </td>
            <td class="issueBtn">
              <nuxt-link to="/booking/issue" class="btn btn-primary">Issue Booking</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/booking/details" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </nuxt-link>
            </td>
          </tr>


          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="first">First Class</span>
              </div>
            </td>
            <td>
              <div class="logo">
                <img src="/images/airline1.png" />
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <div class="actionBtn">
                <div class="btn-group dropleft">
                  <button type="button" class="btn border text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                  </button>
                  <div class="dropdown-menu">
                    <button class="dropdown-item" data-toggle="modal" data-target="#cancelBooking" type="button">Cancel</button>
                    <nuxt-link class="dropdown-item" type="button" to="/booking/ssr-entry"> SSR Entry</nuxt-link>
                  </div>
                </div>
              </div>
            </td>
            <td class="issueBtn">
              <nuxt-link to="/booking/issue" class="btn btn-primary">Issue Booking</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/booking/details" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </nuxt-link>
            </td>
          </tr>


          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="business">Business</span>
              </div>
            </td>
            <td>
              <div class="logo">
                <img src="/images/airline1.png" />
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <div class="actionBtn">
                <div class="btn-group dropleft">
                  <button type="button" class="btn border text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                  </button>
                  <div class="dropdown-menu">
                    <button class="dropdown-item" data-toggle="modal" data-target="#cancelBooking" type="button">Cancel</button>
                    <nuxt-link class="dropdown-item" type="button" to="/booking/ssr-entry"> SSR Entry</nuxt-link>
                  </div>
                </div>
              </div>
            </td>
            <td class="issueBtn">
              <nuxt-link to="/booking/issue" class="btn btn-primary">Issue Booking</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/booking/details" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </nuxt-link>
            </td>
          </tr>


          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="first">First Class</span>
              </div>
            </td>
            <td>
              <div class="logo">
                <img src="/images/airline1.png" />
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <div class="actionBtn">
                <div class="btn-group dropleft">
                  <button type="button" class="btn border text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                  </button>
                  <div class="dropdown-menu">
                    <button class="dropdown-item" data-toggle="modal" data-target="#cancelBooking" type="button"> Cancel</button>
                    <nuxt-link class="dropdown-item" type="button" to="/booking/ssr-entry"> SSR Entry</nuxt-link>
                  </div>
                </div>
              </div>
            </td>
            <td class="issueBtn">
              <nuxt-link to="/booking/issue" class="btn btn-primary">Issue Booking</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/booking/details" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </nuxt-link>
            </td>
          </tr>

        </table>
      </div>
    </div>

    <!-- Modal cancel booking -->
    <div id="cancelBooking" class="modal fade">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="d-flex align-items-start gap-8">
                <img src="~/assets/icons/SVG/remove-red.svg">

                <div class="confirmed_message_box">

                  <h3 class="title">Cancel Booking?</h3>
                  <p class="descriptipons">Are you sure you want to cancel the booking? Type a cancelation reason to confirm cancel booking.</p>
                  <textarea name="" class="form-control" rows="3" placeholder="Type reason"></textarea>
                  <div class="d-flex justify-content-end gap-8">
                    <button class="btnAction text-dark" type="button" data-dismiss="modal" aria-label="Close">Cancel</button>
                    <button class="btnAction bg-danger text-white" type="submit">Confirm</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
